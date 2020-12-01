import request from '@/api/apiClient'
import { commonUrl } from '@/const/api'
const inventoryApi = `${commonUrl}/inventory/v1`

// B2C销售库存
export const b2cInventorySearch = (params) =>
  request.publicGet(`${inventoryApi}/b2c/inventory/search`, params)
