import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H+4IAERBOc934JlmGahihM///dT7q/wfb9EW+P6X4JEgCbQzH3WADIzmvAHO3qzMXW6sZK9hJ5QQHwi7SI8aahvsrkJC+AnGGeemYFDwFQrxqiQD4josTaOE2m0DpsVtVsIlnt4AtcreTLWYhN8Kps7sVZsdQy6BU6CKa0ljQlRX7FfEcUHcVkRH6VhDwX21Hqd/BZK+RMMZvUTgquTLGRbsggfIcqsOdPaqvV30bT1hF0hL8Hu21D+oaYRYC6OXXSsBlQi0oTT+aUILbk/7u/xzMRhJvwYXxbMbIbGBFtHx4N4D9uwxjOqSmVe2fY/m8VBDST1AC5bOHLVwwvHYiNCxFp2VMrt7VkJjg849hT3dZ/+sPOyf+gqJdefzcQI=', 'base64')).toString());
