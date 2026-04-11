#!/bin/bash
find src -type f -name "*.tsx" -exec sed -i "s/c\&apos;/c\'/g" {} +
find src -type f -name "*.tsx" -exec sed -i "s/Qu\&apos;/Qu\'/g" {} +
find src -type f -name "*.tsx" -exec sed -i "s/N\&apos;/N\'/g" {} +
find src -type f -name "*.tsx" -exec sed -i "s/J\&apos;/J\'/g" {} +
