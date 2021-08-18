import { useTheme } from 'next-themes'

export default function AutoDark() {
  const { theme, setTheme } = useTheme()
  setTheme('dark')
  return ''
}
