export default function createIfNotExists(model, entity) {
  if (!entity.hasOwnProperty('id'))
    throw new Error(`every entity should have an id property, but ${entity} doesn't have it, not good!`)

  if (model.hasId(entity.id)) {
    model.withId(entity.id).update(entity)
    return model.withId(entity.id)
  } else
    return model.create(entity)
}
