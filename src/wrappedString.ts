export class WrappedString {
  constructor(private value: string) {}

  insert(token: string, position: number): WrappedString {
    return new WrappedString(
      this.value.slice(0, position) + token + this.value.slice(position)
    );
  }

  unwrap(): string {
    return this.value;
  }
}
