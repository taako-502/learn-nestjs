import { Test, TestingModule } from '@nestjs/testing';
import { hoge } from './hoge';

describe('AppController', () => {
  describe('root', () => {
    it('should return "hoge"', () => {
      expect(hoge()).toBe('hoge');
    });
  });
});
