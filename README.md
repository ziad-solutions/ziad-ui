
<p align="center">
  <img src="./demo/images/ziad.png">
</p>


## 1. Instalação

#### 1.1 Ziad UI está no NPM [npm package](https://www.npmjs.com/package/ziad-ui)

```bash
npm install ziad-ui -save
```

#### 1.2 Modo de usar

```javascript
import Vue from 'vue'
import ZiadUI from 'ziad-ui'
import 'ziad-ui/dist/ziad-ui.css'
Vue.use(ZiadUI)
```
-------------------------------------------------------

## 2. Rodar o demo

```
npm run dev
```
Acessar http://localhost:1234

-------------------------------------------------------

## 3. Gerando o BUILD
Antes de rodar o build verifique qual é a próxima versão a buildar e altere corretamente no arquivo package.json
```
npm run build
```

## 4. Publicando a versão no npmjs

```
npm login
npm publish
```

-------------------------------------------------------

-------------------------------------------------------

## 5. Dicas

- As vezes pode precisar do parcel para rodar a demo
- Todos os comandos acima devem ser rodados em um terminal unix (no caso do windows utilize o ubuntu cmd)
- Em algumas situações no ubuntu não consegue instalar o NPM, mas com jeitinho vai conseguir
- Com acesso ao terminal do ubuntu no windows 10 para acessar o diretório C:/ digite `cd /mtn/c`


Esse projeto é um Fork de [MuseUI](https://muse-ui.org) verifique a documentação.
