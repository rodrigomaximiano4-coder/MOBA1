# MAX HEALMS — PREPARAÇÃO PARA LANÇAMENTO

Build web preparada: **MAX HEALMS • MOBILE87 • ALPHA 2 FINALS**
Commit base: `2cc8e61d65a86294bced1c6e1410db8a143a84d4`

## SITUAÇÃO ATUAL

- Play Console: Teste fechado / Alpha
- AAB atual enviado: versionCode 22
- versionName atual: 1.0
- Package: `com.maxhealms.game`
- Projeto Android local: `C:\Users\rodri\MAX-HEALMS-ANDROID`
- AAB atual conhecido: `C:\Users\rodri\MAX-HEALMS-ANDROID\android\app\release\app-release.aab`

## PRÓXIMA BUILD PREPARADA

Quando a Play aprovar a etapa atual e quisermos publicar a correção:

- Usar a web build MOBILE87
- Gerar Android com **versionCode 23**
- Manter package `com.maxhealms.game`
- Manter assinatura com `maxhealms-release.jks`
- Nome sugerido na Play Console: **MAX HEALMS - Alpha 2 / Correções Mobile**
- Não reutilizar versionCode 22

## CORREÇÕES QUE ENTRAM

1. Final da Jornada 1 usa o mesmo painel compacto visual do Final da Jornada 2.
2. Família continua visível ao fundo no Final 1.
3. Sequestro de Lyra só é disparado quando o jogador inicia a Jornada 2.
4. Reinício/tobogã restaura Varek explicitamente:
   - visible = true
   - posição
   - rotação
   - pose
   - animação Running
5. Saída do tobogã restaura Varek e pista.
6. Base mantém as correções MOBILE85/MOBILE86/MOBILE87.

## COMANDOS PARA ATUALIZAR O ANDROID

Executar no Prompt de Comando:

```bat
cd C:\Users\rodri\MAX-HEALMS-ANDROID
```

Explicação: entra na pasta principal do projeto Android/Capacitor.

```bat
npx cap sync android
```

Explicação: copia/sincroniza o conteúdo web e plugins com o projeto Android.

Depois abrir:

```text
C:\Users\rodri\MAX-HEALMS-ANDROID\android\app\build.gradle
```

Alterar:

```gradle
versionCode 22
```

para:

```gradle
versionCode 23
```

Explicação: a Play Store exige um versionCode maior a cada novo AAB.

Manter:

```gradle
versionName "1.0"
```

Explicação: o nome público da versão pode continuar 1.0 se quisermos; o versionCode é o identificador obrigatório crescente.

Depois:

```bat
cd C:\Users\rodri\MAX-HEALMS-ANDROID\android
```

Explicação: entra na pasta Gradle do Android.

```bat
gradlew clean
```

Explicação: limpa builds antigas para reduzir risco de reaproveitar arquivos desatualizados.

```bat
gradlew bundleRelease
```

Explicação: gera o novo Android App Bundle de release.

A saída esperada é:

```text
C:\Users\rodri\MAX-HEALMS-ANDROID\android\app\build\outputs\bundle\release\app-release.aab
```

## ANTES DE ENVIAR À PLAY CONSOLE

Validar no aparelho real:

- início da Jornada 1
- tobogã da primeira fase
- reiniciar durante/depois do tobogã
- Varek nunca pode desaparecer
- final da Jornada 1
- painel compacto + família ao fundo
- botão iniciar Jornada 2
- cena do sequestro
- Jornada 2
- final da Jornada 2
- compras/ads/login conforme disponibilidade de teste

## REGRA

Não subir o versionCode 23 à Play Console antes da validação final no aparelho.
