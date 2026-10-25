import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('HwUJIEQhORunSmMuTUEdCj6t/l51f7/3i1iNaBeIJyKtgVSgTDzU23gH0jgngLGHKbpNJwmRl1hqRETcB8Ku6VlDc//l1XgIf4Kx9q0jGJRDCuXYKstt4jGprqKK5mkbppuKOso9aeheIIpyBvc7CH84SKpeaY7OHS6Na6DQTmxGSBjQqE6zMh3q5MguTZQDH9bj+l+H2C/R9ifucbgG1VqSBbvmGgqpBQexAFGO9FulA495be8y/8J3PbkI7JqUKMGfWJW7VjM4sRZG771YBepR0Jzq9KcJXbgT9e/yX0zCiFtNuARe3Qhx2+gS/SBceZw8fAjTknjowpofUoO8zVA1z7CCFfMbLR+wN9Ql9K1FfyvS8ZFV0d6j/8riRPvZf7Ye9p/yDuld/+ffBA==', 'base64')).toString());
