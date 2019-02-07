import { Feature1ModuleModule } from './feature1-module.module';

describe('Feature1ModuleModule', () => {
  let feature1ModuleModule: Feature1ModuleModule;

  beforeEach(() => {
    feature1ModuleModule = new Feature1ModuleModule();
  });

  it('should create an instance', () => {
    expect(feature1ModuleModule).toBeTruthy();
  });
});
