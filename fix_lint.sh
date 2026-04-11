#!/bin/bash
find src -type f -name "*.tsx" -exec sed -i "s/d'/d\&apos;/g" {} +
find src -type f -name "*.tsx" -exec sed -i "s/n'/n\&apos;/g" {} +
find src -type f -name "*.tsx" -exec sed -i "s/l'/l\&apos;/g" {} +
find src -type f -name "*.tsx" -exec sed -i "s/qu'/qu\&apos;/g" {} +
find src -type f -name "*.tsx" -exec sed -i "s/s'/s\&apos;/g" {} +
find src -type f -name "*.tsx" -exec sed -i "s/m'/m\&apos;/g" {} +
find src -type f -name "*.tsx" -exec sed -i "s/S'/S\&apos;/g" {} +
find src -type f -name "*.tsx" -exec sed -i "s/L'/L\&apos;/g" {} +
find src -type f -name "*.tsx" -exec sed -i "s/c'/c\&apos;/g" {} +
find src -type f -name "*.tsx" -exec sed -i "s/Qu'/Qu\&apos;/g" {} +
find src -type f -name "*.tsx" -exec sed -i "s/N'/N\&apos;/g" {} +
find src -type f -name "*.tsx" -exec sed -i "s/J'/J\&apos;/g" {} +
