# Global textProps Implementation

Bu implementasyon, React Native EditorJS Viewer'daki tüm Text elementlerine global textProps geçirebilmenizi sağlar.

## Kullanım

```tsx
import EditorJsViewer from '@fintables/react-native-editorjs-viewer';

<EditorJsViewer
  data={editorData}
  textProps={{
    maxFontSizeMultiplier: 2.0,
    allowFontScaling: true,
    adjustsFontSizeToFit: false,
    numberOfLines: 0,
    // Diğer Text props'ları...
  }}
/>
```

## Desteklenen Prop'lar

`textProps` prop'u, React Native'deki `Text` component'inin tüm prop'larını destekler, ancak `style` ve `children` hariç:

- `maxFontSizeMultiplier` - Font boyutunun maksimum çarpanı
- `allowFontScaling` - Font scaling'e izin verir/vermez
- `adjustsFontSizeToFit` - Text'in container'a sığması için otomatik boyutlandırma
- `numberOfLines` - Maksimum satır sayısı
- `ellipsizeMode` - Text kesme modu
- `selectable` - Text'in seçilebilir olup olmadığı
- Ve diğer `TextProps`...

## Değiştirilen Dosyalar

### Type Tanımları
- `src/types.ts` - `EditorJsViewerProps`'a `textProps` eklendi

### Ana Component
- `src/index.tsx` - `textProps` prop'u eklendi ve `useComponentMap`'e geçildi

### Hook'lar
- `src/hooks/useComponentMap.tsx` - `textProps` parametresi eklendi ve tüm component'lere geçildi
- `src/hooks/useParseHtmlTags.tsx` - SubComponent'lere `textProps` geçirme eklendi

### Ana Component'ler
- `src/components/paragraph/index.tsx` - `textProps` prop'u eklendi
- `src/components/header/index.tsx` - `textProps` prop'u eklendi
- `src/components/quote/index.tsx` - `textProps` prop'u eklendi
- `src/components/delimiter/index.tsx` - `textProps` prop'u eklendi

### SubComponent'ler
- `src/subComponents/bold/index.tsx` - `textProps` spread operatörü eklendi
- `src/subComponents/italic/index.tsx` - `textProps` spread operatörü eklendi
- `src/subComponents/underline/index.tsx` - `textProps` spread operatörü eklendi
- `src/subComponents/mark/index.tsx` - `textProps` spread operatörü eklendi
- `src/subComponents/code/index.tsx` - `textProps` spread operatörü eklendi
- `src/subComponents/link/index.tsx` - `textProps` spread operatörü eklendi (onPress hariç)

## Geriye Uyumluluk

Bu değişiklik geriye uyumludur. `textProps` prop'u isteğe bağlıdır ve mevcut kullanımları etkilemez.

## Örnek Kullanım Senaryoları

### Font Size Multiplier
```tsx
<EditorJsViewer
  data={data}
  textProps={{ maxFontSizeMultiplier: 1.5 }}
/>
```

### Font Scaling Devre Dışı
```tsx
<EditorJsViewer
  data={data}
  textProps={{ allowFontScaling: false }}
/>
```

### Accessibility
```tsx
<EditorJsViewer
  data={data}
  textProps={{
    accessibilityRole: "text",
    accessible: true,
    maxFontSizeMultiplier: 3.0
  }}
/>
```