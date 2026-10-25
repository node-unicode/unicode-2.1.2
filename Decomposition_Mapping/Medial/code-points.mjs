import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('Hy4CKORIz3GqND4jlb7Q8PRss/Lu44dpI6RkE01maaUtV3RjyOZL5oMmZ+b/V4bnv6iXgoksNNZR5a+RLXuNXXLKcw9gW/Pc0z9qpinS6es6bFMbvFNSMryLBxRDE8aI/CYtDEh+e5eQ0lyGMDCnw8g4n8A8jyG4pZAQL88hOppEA5utSGdiiKpyq3NCrz54aYRQIz5g7/N7jnUiStWAy5gq6mt5YX5mXmlB5n/sHjRk5Ydp+7tMACxfgNdtIHjhM1U1Z+u/JVxiSq8/ZQxLiOhsOfMnJP8raJnJ5sgpfNlabAE=', 'base64')).toString());
