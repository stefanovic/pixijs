import type { IUniformData } from '../rendering/renderers/gl/shader/GlProgram';
import type { UniformGroup } from '../rendering/renderers/shared/shader/UniformGroup';
import type { UniformsSyncCallback } from '../rendering/renderers/shared/shader/utils/createUniformBufferSync';

export function generateUniformsSync(
    group: UniformGroup,
    uniformData: Record<string, IUniformData>
): UniformsSyncCallback
{
    String(group);
    String(uniformData);

    return (() =>
    {
        //
    }) as UniformsSyncCallback;
}
