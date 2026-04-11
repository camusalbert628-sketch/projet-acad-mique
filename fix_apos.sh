#!/bin/bash
find src -type f -name "*.tsx" -exec sed -i "s/d\&apos;/d\'/g" {} +
find src -type f -name "*.tsx" -exec sed -i "s/n\&apos;/n\'/g" {} +
find src -type f -name "*.tsx" -exec sed -i "s/l\&apos;/l\'/g" {} +
find src -type f -name "*.tsx" -exec sed -i "s/qu\&apos;/qu\'/g" {} +
find src -type f -name "*.tsx" -exec sed -i "s/s\&apos;/s\'/g" {} +
find src -type f -name "*.tsx" -exec sed -i "s/m\&apos;/m\'/g" {} +
find src -type f -name "*.tsx" -exec sed -i "s/S\&apos;/S\'/g" {} +
find src -type f -name "*.tsx" -exec sed -i "s/L\&apos;/L\'/g" {} +
