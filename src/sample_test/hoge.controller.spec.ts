import { Test, TestingModule } from '@nestjs/testing';
import { HogeController } from './hoge.controller';

describe('HogeController', () => {
  let controller: HogeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HogeController],
    }).compile();

    controller = module.get<HogeController>(HogeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return "hoge"', async () => {
    const hoge = await controller.hoge();
    expect(hoge).toBe('hoge');
  });
});
