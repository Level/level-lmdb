require('level-packager/test')(
    require('tape')
  , require('./')
  , { skipRepairTest: true, skipDestroyTest: true }
)
