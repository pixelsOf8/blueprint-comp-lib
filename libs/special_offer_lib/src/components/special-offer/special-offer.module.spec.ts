import { SpecialOffersModule } from './special-offer.module';

describe('SpecialOffersModule', () => {
  let headerModule: SpecialOffersModule;

  beforeEach(() => {
    headerModule = new SpecialOffersModule();
  });

  it('should create an instance', () => {
    expect(headerModule).toBeTruthy();
  });
});
