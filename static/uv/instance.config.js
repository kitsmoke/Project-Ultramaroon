self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/instance.handler.js',
    bundle: '/instance.bundle.js',
    config: '/instance.config.js',
    sw: '/instance.js',
};
