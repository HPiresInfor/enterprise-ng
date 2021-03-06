interface TrackDirtyStatic {
  destroy(): void;
  updated(): void;
}

interface SohoTrackDirtyEvent extends JQuery.Event { // tslint:ignore
  currentTarget: HTMLElement;
}

/**
 * JQuery Integration
 */

interface JQueryStatic {
  trackdirty: TrackDirtyStatic;
}

interface JQuery<TElement = HTMLElement> extends Iterable<TElement> {
  trackdirty(): JQuery;
}
