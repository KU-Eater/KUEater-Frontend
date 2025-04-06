import {ACCESS_TOKEN_PATH, getAuthClient} from "../grpcClient";

import { AuthProcessRequest, AuthProcessResponse } from "../../generated/auth/main_pb";
import { AuthServiceClient } from "../../generated/auth/MainServiceClientPb";
import { RpcError } from "grpc-web";
import AsyncStorage from "@react-native-async-storage/async-storage";

// After getting code from Google authentication, call this function to get and store access token
export const performAuth = (code: string): Promise<boolean> => new Promise((resolve, reject) => {

    const client: AuthServiceClient = getAuthClient();
    
    const req: AuthProcessRequest = new AuthProcessRequest();
    req.setCode(code);
    
    client.authProcess(
        req, null, (err: RpcError, resp: AuthProcessResponse) => {
            if (err) {
                console.error(err);
                reject("There has been an error while authenticating");
            }
            // Try saving the access token
            try {
                AsyncStorage.setItem(ACCESS_TOKEN_PATH, resp.getToken());
            } catch (e) {
                console.error(e);
                reject("There has been an error while saving token");
            }
            resolve(true);
        }
    );

});
