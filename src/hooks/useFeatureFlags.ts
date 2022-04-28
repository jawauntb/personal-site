import { useContext } from 'react';
import { FeatureFlagContext } from '../featureFlags';

/**
 * Provides access to the feature flags context.
 * @returns The feature flags context
 */
const useFeatureFlags = (): Record<string, boolean> =>
  useContext(FeatureFlagContext);

export default useFeatureFlags;
