export interface PokeSearchBarProps {
  modelValue: string
  loading?: boolean
}

export interface PokeSearchBarEmits {
  (e: 'update:modelValue', value: string): void
  (e: 'search', value: string): void
}
