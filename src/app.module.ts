import { Module } from '@nestjs/common';
import { GraphQlModule } from './module/graph-ql/graph-ql.module';

@Module({
  imports: [GraphQlModule],
})
export class AppModule {}
