export function triggerPrintToPdf(): void {
  // Switch to continuous booklet mode temporarily if needed, then trigger print
  window.print();
}
