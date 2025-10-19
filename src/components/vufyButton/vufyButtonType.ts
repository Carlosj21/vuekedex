export interface vufyButtonPropsType {
  textContent?: string
  color?: string
  prependIcon?: string
  prependColor?: string
  icon?: string | boolean
  variant?: 'flat' | 'text' | 'elevated' | 'outlined' | 'plain' | 'tonal'
  density?: 'compact' | 'comfortable' | 'default'
  size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large'
  rounded?: 'xs' | 'sm' | '0' | 'lg' | 'xl'
}
