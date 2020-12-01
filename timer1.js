const timers = process.argv.splice(2).filter(t => !isNaN(t) && t >= 0).map(t => t * 1000);

for (const timer of timers) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, timer);
}