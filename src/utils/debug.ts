import { InternalServerErrorException } from '@nestjs/common';

declare global {
  function debug(data: any): void;
}

global.debug = (data: any) => {
  console.log(data);
  throw new InternalServerErrorException(data);
};
