import { Features } from './Features';
import { MarketingHeader } from './MarketingHeader';
import { Pricing } from './Pricing';

export const UnauthenticatedContent = () => {
  return (
    <>
      <MarketingHeader />
      <Features />
      <Pricing />
    </>
  );
};
