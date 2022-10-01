#!/bin/bash

npm install
# Caso trabalhe com migrations, descomente as 2 linhas a seguir
# npm run build
# npx typeorm migration:run
npm run start:dev