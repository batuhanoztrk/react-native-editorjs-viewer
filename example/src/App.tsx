import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import data from './data.json';
import EditorJsViewer from '@fintables/react-native-editorjs-viewer';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <EditorJsViewer
          data={data}
          showFallback={true}
          style={styles.editorJsContainer}
          textProps={{
            maxFontSizeMultiplier: 2.0,
            allowFontScaling: true,
            adjustsFontSizeToFit: false,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  editorJsContainer: {
    padding: 10,
  },
});
