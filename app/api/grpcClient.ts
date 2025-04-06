import {
    KUEaterBackendClient
} from '../generated/data/MainServiceClientPb';

import {
    AuthServiceClient
} from '../generated/auth/MainServiceClientPb';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AccountReadinessRequest, AccountReadinessResponse } from '../generated/data/main_pb';
import { Metadata, RpcError, StatusCode } from 'grpc-web';

const AUTH_CLIENT = new AuthServiceClient(process.env.EXPO_PUBLIC_BACKEND_HOST, null);
const BACKEND_CLIENT = new KUEaterBackendClient(process.env.EXPO_PUBLIC_BACKEND_HOST, null);

export const ACCESS_TOKEN_PATH = 'backend-access-token';

interface Headers {
    authorization: string | null;
}

interface BackendClientWithHeader {
    client: KUEaterBackendClient,
    header: any
}

const constructMetadata = async (): Promise<Headers> => {
    try {
        const value = await AsyncStorage.getItem(ACCESS_TOKEN_PATH);
        if (value !== null) {
            // Value exists
            return {
                authorization: `Bearer ${value}`
            }
        } else {
            return {
                authorization: null
            }
        }
    } catch(e) {
        console.error(e);
        return {
            authorization: null
        }
    }
};

// Gets AuthClient
export const getAuthClient = (): AuthServiceClient => {
    return AUTH_CLIENT;
}

// Gets BackendClient
export const getBackendClient = (): Promise<BackendClientWithHeader> => new Promise((resolve, reject) => {

    // Check for headers if not null
    constructMetadata().then((headers) => {
        if (headers.authorization == null) {
            reject("No access token found");
        }
        // Test if the access token is expired
        BACKEND_CLIENT.accountReadiness(
            new AccountReadinessRequest(),
            {
                "authorization": headers.authorization!
            },
            (err: RpcError, _: AccountReadinessResponse) => {
                if (err) {
                    if (err.code == StatusCode.UNAUTHENTICATED) {
                        // Authorization didn't succeed
                        try {
                            AsyncStorage.removeItem(ACCESS_TOKEN_PATH);
                        } catch(e) { console.error(e); }
                        reject("Expired token");
                    } else {
                        console.error("Can be other issues, like backend is unreachable.");
                        reject("Unknown issue");
                    }
                }
                resolve({
                    client: BACKEND_CLIENT,
                    header: {
                        "authorization": headers.authorization!
                    }
                })
            }
        )
    })
});