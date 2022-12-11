import { Test, TestingModule } from '@nestjs/testing';
import { Hoge as HogeController } from './hoge.controller';

describe('AppController', () => {
  let controller: HogeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HogeController],
    }).compile();

    controller = module.get<HogeController>(HogeController);
  });

  describe('root', () => {
    it('should return "hoge"', async () => {
      const hoge = await controller.hoge();
      expect(hoge).toBe('hoge');
    });
  });
});
