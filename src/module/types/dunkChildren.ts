import { DunkModule } from './dunkModule';

/**
 * Submodules of a Dunk module.
 */
export type DunkChildren = Record<string, DunkModule<any>>;
