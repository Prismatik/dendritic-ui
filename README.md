# Dendritic UI

## Usage

### Components

Import the component you want to use from `dendritic-ui`:

```
import { Button } from 'dendritic-ui';
<Button /> // usage

```

### Styles

Dendritic UI comes bundled with default styles that can be included from:
```
require('dendritic-ui/dist/dendritic-ui.css');
```

## Development

```
npm start
```

This will start React Storybook at `http://localhost:9001`.  Your main
development will be done here.

## Testing

```
npm test
```

Test coverage information is also available with `istanbul`:
```
npm run cover
```

You can also check current test coverage against the default thresholds (must
run `npm run cover` at least once prior to generate report `.json`):
```
npm run check-coverage
```

## Production

```
npm run build
```

This will build a production ready version to `/dist`.
