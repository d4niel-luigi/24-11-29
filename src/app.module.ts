import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamModule } from './team/team.module';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [TeamModule, PlayersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
