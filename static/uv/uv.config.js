self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://cdn.jsdelivr.net/gh/greatshot101/Project-Ultramaroon/static/uv/uv.handler.js',
    bundle: 'https://cdn.jsdelivr.net/gh/greatshot101/Project-Ultramaroon/static/uv/uv.bundle.js',
    config: 'https://cdn.jsdelivr.net/gh/greatshot101/Project-Ultramaroon/static/uv/uv.config.js',
    sw: 'https://cdn.jsdelivr.net/gh/greatshot101/Project-Ultramaroon/static/uv/uv.sw.js',
};
