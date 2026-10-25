import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H5YJAEQVm41TgWfLchkmoCRX5Qn+/3un9/2x7NvSj6tAN0GbAhpjA3USGpsTG1MshVijsgIrC5fvLn6/C3F4YzRK3j4IB91rMUkwq+wZXCAoORUIPauCnrPVLv5YuwPkk4fgrmzkmWjOHuJO5GZkF43dfZSdIDgoG9+F/ORBS1l1cRb+iaFcqH7GAFxABNUHfHe5B5Gc9M+nooT8eA34RPARURACvJd4zXo8kUdk9fuoLBFGQcL5sA5apgco87kZKOiB8AGMHKAJg/FP4/9wo9T/zpt2afjv8vdWB2VwuHWRSzPMCSsLnHu3uvcYHJKSHncuwP5T9abFWGPA5QHxwdLyoPmiz+nzTPLBqukBxZFEJ7iWHwOY8bP/nmewKukVmpfV86MG', 'base64')).toString());
