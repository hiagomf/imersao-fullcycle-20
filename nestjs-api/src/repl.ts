import { repl } from '@nestjs/core';
import { AppModule } from './app.module';

async function booststrap() {
  await repl(AppModule);
}
booststrap();
