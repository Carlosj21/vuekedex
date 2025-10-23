export interface PokeSearchBarProps {
  modelValue?: string
  loading?: boolean
  disabled?: boolean
}

export interface PokeSearchBarEmits {
  (e: 'update:modelValue', value: string): void
  (e: 'search', value: string): void
}
