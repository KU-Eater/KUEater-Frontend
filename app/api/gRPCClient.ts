import {
    KUEaterBackendClient
} from '../generated/data/MainServiceClientPb';

const getClient = (host: string) => {
    return new KUEaterBackendClient(host, null);
}

export default getClient;