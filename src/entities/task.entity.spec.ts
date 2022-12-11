import { Task } from './task.entity';

describe('Task', () => {
  it('should be defined', () => {
    expect(new Task()).toBeDefined();
  });
});
