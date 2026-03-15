declare module 'aos' {
  interface InitConfig {
    duration?: number
    easing?: string
    once?: boolean
  }
  
  const AOS: {
    init(config?: InitConfig): void
    refresh(): void
    refreshHard(): void
  }
  
  export default AOS
}
