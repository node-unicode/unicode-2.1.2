module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))