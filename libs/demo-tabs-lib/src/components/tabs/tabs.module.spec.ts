import { TabsLibModule } from './tabs.module';

describe('TabsLibModule', () => {
  let headerModule: TabsLibModule;

  beforeEach(() => {
    headerModule = new TabsLibModule();
  });

  it('should create an instance', () => {
    expect(headerModule).toBeTruthy();
  });
});
