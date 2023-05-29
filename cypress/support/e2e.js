import {
  isFeature,
  doesFeatureMatch
} from '@badeball/cypress-cucumber-preprocessor';

beforeEach(() => {
  // This is only run for Cucumber-type specs
  if (isFeature() && doesFeatureMatch('@log')) {
    console.log('*** LOG ***');
  }
});