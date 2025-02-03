declare module 'aos' {
    interface AOS {
      init(options?: object): void;
      refresh(): void;
      refreshHard(): void;
    }
    const AOS: AOS;
    export = AOS;
  }
  