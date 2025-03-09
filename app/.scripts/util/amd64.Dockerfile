# Uses node (not musl) since we needed to have 'protobuf-javascript' supported,
# as Node image uses glibc and has all deps for Node.js
FROM node:23-slim

ENV ARCH=x86_64
ARG PROTOC_VERSION
ARG PROTOBUF_JS_VERSION
ARG GRPCWEB_VERSION

WORKDIR /tmp
ADD https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOC_VERSION}/protoc-${PROTOC_VERSION}-linux-${ARCH}.zip protoc.zip
ADD https://github.com/protocolbuffers/protobuf-javascript/releases/download/v${PROTOBUF_JS_VERSION}/protobuf-javascript-${PROTOBUF_JS_VERSION}-linux-${ARCH}.zip protobuf-javascript.zip
ADD https://github.com/grpc/grpc-web/releases/download/${GRPCWEB_VERSION}/protoc-gen-grpc-web-${GRPCWEB_VERSION}-linux-${ARCH} /usr/local/bin/protoc-gen-grpc-web

# Unzip all other archives to /usr/local/bin, symlink the binaries to outer directory, then clean up /tmp
RUN apt-get update && \
    apt-get install -y unzip && \
    unzip protoc.zip -x readme.txt -d protoc && \
    mv protoc/bin/* /usr/local/bin && \
    mv protoc/include/* /usr/local/include && \
    unzip -j protobuf-javascript.zip bin/protoc-gen-js && \
    mv protoc-gen-js /usr/local/bin && \
    chmod +x /usr/local/bin/* && \
    rm -rf /tmp/* && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /

CMD [ "/bin/sh", "-c", "./script" ]