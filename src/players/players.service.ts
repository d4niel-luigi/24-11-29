import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class PlayersService {

  constructor(private readonly db: PrismaService) { }

  create(createPlayerDto: CreatePlayerDto) {
    return 'This action adds a new player';
  }

  findAll() {
    return this.db.player.findMany();
  }

  findOne(id: number) {
    return this.db.player.findUnique({ where: { id } });
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return this.db.player.delete({ where: { id } })
  }
}
