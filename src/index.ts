import 'dotenv/config';

import app from '@shared/infra/http/server';
import { setupDBConnection } from '@shared/infra/typeorm';

setupDBConnection();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port: ${port}`));
