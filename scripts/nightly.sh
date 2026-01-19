sed -i 's/"name": "teamway-ui",/"name": "@teamway-ui\/nightly",/' packages/teamway-ui/package.json
sed -i '2s/teamway-ui/@teamway-ui\/nightly/' internal/build-constants/src/pkg.ts

# remove line 14 to 22, will not publish eslint-config and metadata to npm on nightly
sed -i '14,22d' scripts/publish.sh
