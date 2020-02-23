export const SHARE_DATA = 'SHARE_DATA';

export function shareDataSagaAction(data) {
  return {
    type: SHARE_DATA,
    data,
  };
}
