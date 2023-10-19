import { GlUniformGroupSystem } from '../rendering/renderers/gl/shader/GlUniformGroupSystem';
import { generateUniformsSync } from './generateUniformsSync';

import type { IUniformData } from '../rendering/renderers/gl/shader/GlProgram';
import type { UniformGroup } from '../rendering/renderers/shared/shader/UniformGroup';
import type { UniformsSyncCallback } from '../rendering/renderers/shared/shader/utils/createUniformBufferSync';

export function selfInstall()
{
    Object.assign(GlUniformGroupSystem.prototype,
        {
            _systemCheck()
            {
                // Do nothing, don't throw error
            },

            _generateUniformsSync(group: UniformGroup, uniformData: Record<string, IUniformData>): UniformsSyncCallback
            {
                return generateUniformsSync(group, uniformData);
            },
        }
    );
}

selfInstall();
